## Useful commands

```
$ k node.exe; k java.exe
$ npm view nativescript version
$ tns devices
$ DEVICE=d8f42374;
$ tns run android --device $DEVICE
$ SUBSTR=onvanilla; PACKAGE=$(adb -s $DEVICE shell "pm list packages -f" | cut -f 2 -d "=" | grep $SUBSTR | tr -d '\r'); echo $PACKAGE
$ SUBSTR=onvanilla; PACKAGE=$(adb -s $DEVICE shell "pm list packages -f" | cut -f 2 -d "=" | grep $SUBSTR | tr -d '\r'); if [[ $PACKAGE != "" ]]; then adb -s $DEVICE uninstall $PACKAGE; else echo "Error: Package not found."; fi
```

```
$ export ANDROID_HOME=~/Library/Android/sdk
$ tns doctor
$ tns run ios
```
