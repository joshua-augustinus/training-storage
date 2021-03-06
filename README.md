# rn fetch blob bug

Instructions:
```
yarn
yarn android
```

This will load up the app, download an image then save the filepath in storage
Next load it up again and this time it will see the filepath in storage and use that one:
```
yarn android
```


If we test again on IOS 
```
npx pod-install
yarn ios
```

This should load up the app, download the image and save the filepath in storage.
However, when we boot up the app again the image is not found
```
yarn ios
```
