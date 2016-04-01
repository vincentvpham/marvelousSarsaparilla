## Table of Contents

1. [Pakt Server](#pakt-server)
1. [Team](#team)
1. [Development](#development)
1. [Requirements](#requirements)
    1. [Installing Dependencies](#installing-dependencies)
    1. [File Hierarchy](#file-hierarchy)
1. [Contributing](#contributing)
1. [Documentation](#documentation)
1. [Running React Native Emulator](#running-react-native-emulator)

## Pakt Server

You can find the corresponding Server [here](https://github.com/marvelousSarsaparilla/paktServer.git).

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
 |__PAKT__
     |
     |__ANDROID__
     |   |- ... etc ...
     |
     |__APP__
     |   |__ACTIONS__
     |   |   |- index.js
     |   |
     |   |__ASSETS__
     |   |   |__IMG__
     |   |       |- ... etc ...
     |   |
     |   |__COMPONENTS__
     |   |   |- App.js
     |   |   |- Camera.js
     |   |   |- CreatePaktDateForm.js
     |   |   |- CreatePaktForm.js
     |   |   |- CreatePaktFriendsForm.js
     |   |   |- FriendsRow.js
     |   |   |- Header.js
     |   |   |- IndividualPakt.js
     |   |   |- Landing.js
     |   |   |- Loading.js
     |   |   |- Login.js
     |   |   |- PaktList.js
     |   |   |- PaktListItem.js
     |   |   |- ProgressPics.js
     |   |
     |   |__CONTAINERS__
     |   |   |- CreatePakt.js
     |   |   |- GetCurrentPakt.js
     |   |   |- GetPakts.js
     |   |   |- LoginUser.js
     |   |   |- SendPicture.js
     |   |   
     |   |__REDUCERS__
     |   |   |- index.js
     |   |   |- pakts.js
     |   |   |- users.js
     |   |   
     |   |__TEST__
     |   |   |- ... etc ...
     |   |
     |   |__UTILS__
     |   |   |- env.example.js
     |   |   |- s3_policy.js
     |   |
     |   |- index.js
     |
     |__IOS__
         |- ... etc ...
```

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

##Documentation
[Google Doc](https://docs.google.com/document/d/1dVcplVjLmCKfeFGQ8nND-BS1UNxMItkWBqRBZwvbvWs/edit?usp=sharing)

##Running React Native Emulator
To run your app on iOS:
  ```sh
  cd /paktClient/Pakt
  react-native run-ios
  ```
  OR
  * Open /paktClient/Pakt/ios/Pakt.xcodeproj in Xcode
  * Hit the Run button
  
