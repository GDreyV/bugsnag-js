#!
cp -r test/react-native/features/fixtures/app test/react-native/features/fixtures/$REACT_NATIVE_VERSION/app
cd test/react-native/features/fixtures/$REACT_NATIVE_VERSION
source build.sh

cp output/output.ipa ../../../../../build/$REACT_NATIVE_VERSION.ipa