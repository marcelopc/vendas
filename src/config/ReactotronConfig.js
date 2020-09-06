import Reactotron from 'reactotron-react-native';

if (__DEV__) {
    const tron = Reactotron.configure()
        .useReactNative()
        .connect({host: '192.168.1.195'});

    console.log = param => tron.log(param);

    tron.clear();
}
