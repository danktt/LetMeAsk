import { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";


type User = {
  id: string,
  name: string,
  avatar: string
}

type AuthContextType = {
  user: User | undefined;
  singInWithGoogle: () => Promise<void>;
}

// Tudo que é passado como children tem que alem de receber uma PROPS
//ele tem que receber um type para validar, e todo children recebe reactNode como typagem... es

type AuthContextProviderProps =  {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);



const [ user, setUser] = useState<User>();

  useEffect(() =>{
    const unsubscribe =  auth.onAuthStateChanged(user =>{
      if(user){
        const { displayName, photoURL, uid } = user;

       if(!displayName || !photoURL){
        throw new Error('Missing information from Goolge Account.')
      }
      setUser({
       id: uid,
       name: displayName,
       avatar: photoURL
      })
      }
    })
    return ()=>{
      unsubscribe();
    }
  }, [])

  async function singInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user){
      const { displayName, photoURL, uid } = result.user;

       if(!displayName || !photoURL){
        throw new Error('Missing information from Goolge Account.')
      }

      setUser({
       id: uid,
       name: displayName,
       avatar: photoURL
      })
    }  
  }

export function AuthContextProvider(props: AuthContextProviderProps){
  return(
<AuthContext.Provider value={{user, singInWithGoogle}} >
    {props.children}
</AuthContext.Provider>
  )
}