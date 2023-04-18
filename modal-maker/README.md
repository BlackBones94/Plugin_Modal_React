# What is it?

This is a componant react to display in full screen or hide a modal 
according to the submit.

## Install

```bash
npm i modal-maker
```

## Usage

After installing the package, import useState and ModalMaker

```jsx
import { useState } from 'react'
```
 
Then copy/past this hook into the parent component of this modal:

```jsx
    const [isModalOpen, setIsModalOpen] = useState(false)
```

component usage

```jsx
    <MyComponent isOpen = {isModalOpen} closeModal= {closeModal}/>
```


Example of use:

```jsx
    import React, { Component, useState } from 'react'

    import MyComponent from 'react-modal'

    function Exemple() {
        
        const [isModalOpen, setIsModalOpen] = useState(false)
        
        function openModal(){
        setIsModalOpen(true);
        }

        function closeModal(e){
        e.preventDefault();
        setIsModalOpen(false)
        } 

        return(
            <MyComponent isOpen = {isModalOpen} closeModal= {closeModal}/>
        )
    }
```

## License

MIT © [damienpellet](https://github.com/BlackBones94)
