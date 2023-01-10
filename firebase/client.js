import { initializeApp } from 'firebase/app'
import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCXC-oiCBgnwy1eozyH5ygBbyyYPBO5nqo",
    authDomain: "devtter-741be.firebaseapp.com",
    projectId: "devtter-741be",
    storageBucket: "devtter-741be.appspot.com",
    messagingSenderId: "1069851928761",
    appId: "1:1069851928761:web:81dd3d8a04120bc0d49368",
    measurementId: "G-FKKZP5THLT"
}

initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
    const {displayName, email, photoURL} = user
    return {
        avatar: photoURL,
        userName: displayName,
        email
    }
}

export const onAuthStateChanged = (onChange) => {
    return getAuth().onAuthStateChanged(user => {
        const normalizeUser = user ? mapUserFromFirebaseAuthToUser(user) : null
        onChange(normalizeUser)
    })
}

export const loginWithGitHub = () => {
    const githubProvider = new GithubAuthProvider()
    githubProvider.setCustomParameters(firebaseConfig)
    const auth = getAuth()
    return signInWithPopup(auth, githubProvider)
}