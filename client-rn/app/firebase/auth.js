import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
// import { googleWebClientID } from './keys';

GoogleSignin.configure({
  webClientId:
    '842915564700-dj9bjic50hudg1h89fkt4ho35c3gpcrh.apps.googleusercontent.com',
  offlineAccess: true,
  scopes: ['profile', 'email'],
});

export async function loginWithGoogle() {
  return GoogleSignin.signIn().then((user) => {
    const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);

    return auth().signInWithCredential(googleCredential);
  });
}

export function logout() {
  return auth().signOut();
}

export function translateUser(user) {
  if (!user) {
    return null;
  }

  return {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
  };
}
