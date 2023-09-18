### Window Port Kapamayı ###
netstat -ano | findstrt:8081
taskkill /PID ID /F
---------------------------

### React Native Kurma ###
npx create-expo-app ReactNativeTemplate
cd ReactNativeTemplate
npx expo start
npx expo start --port=8082

Not: Eğer çalışmazsa
npx expo start --android
npx expo start --ios