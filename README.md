# Marvelous Sarsaparilla

Building some cool stuff (NBAS)

## Table of Contents

1. [Team](#team)
2. [Development](#development)
3. [Requirements](#requirements)
    1. [Installing Dependencies](#installing-dependencies)
    2. [File Hierarchy](#hierarchy)
4. [Contributing](#contributing)
5. [Documentation](#documentation)
6. [Running React Native Emulator](#running-react-native-emulator)

## Team

  - __Product Owner__: Taylor Chamberlain
  - __Scrum Master__: Vincent Pham
  - __Development Team Members__: Deniz Mekik, Robert Boggs, Taylor Chamberlain, Vincent Pham

## Development

### Installing Dependencies

From within the root directory:
```sh
npm install
```

## Requirements

  - Xcode

### File Hierarchy

```js
ROOT
 |__(Pakt)CLIENT__
     |
     |__ANDROID__
     |   |- ... etc ...
     |
     |__APP__
     |   |__ACTIONS__
     |   |   |- index.js
     |   |
     |   |__COMPONENTS__
     |   |   |- App.js
     |   |   |- Camera.js
     |   |   |- IndividualPakt.js
     |   |   |- Link.js
     |   |   |- Login.js
     |   |   |- NavBar.js
     |   |   |- PaktList.js
     |   |   |- PaktListItem.js
     |   |
     |   |__CONTAINERS__
     |   |   |- FilterLink.js
     |   |   |- GetCurrentPakt.js
     |   |   |- GetPakts.js
     |   |   |- SwitchRoute.js
     |   |   
     |   |__REDUCERS__
     |   |   |- index.js
     |   |   |- pakts.js
     |   |   |- visibilityFilter.js
     |   |   
     |   |__TEST__
     |   |   |- ... etc ...
     |   |
     |   |__UTILS__
     |       |- env.example.js
     |       |- s3_policy.js
     |
     |__IOS__
         |- ... etc ...
```

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

##Documentation
[Google Doc](https://docs.google.com/document/d/1dVcplVjLmCKfeFGQ8nND-BS1UNxMItkWBqRBZwvbvWs/edit?usp=sharing)

##Tests
  > Some_testing_instructions

##Running React Native Emulator
To run your app on iOS:
  ```sh
  cd /paktClient/Pakt
  react-native run-ios
  ```
  OR
  * Open /paktClient/Pakt/ios/Pakt.xcodeproj in Xcode
  * Hit the Run button

To run your app on Android:
  * Have an Android emulator running (quickest way to get started), or a device connected
  
  ```sh
  cd /paktClient/Pakt
  react-native run-android
  ```