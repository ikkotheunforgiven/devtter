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

export const loginWithGitHub = () => {
    const githubProvider = new GithubAuthProvider()
    githubProvider.setCustomParameters(firebaseConfig)
    const auth = getAuth()
    return signInWithPopup(auth, githubProvider)
    .then(user => {
        const {additionalUserInfo} = user
        const {username, profile} = additionalUserInfo
        const {avatar_url} = profile
        return {
            avatar: avatar_url,
            username
        }
    })
}