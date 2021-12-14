import React, { createContext,useState} from 'react'
export const DataContext = createContext();

export const DataProvider = (props) => {
  
        const [products, setProducts] = useState([
            {
                "_id": "1",
                "title": "Wacth Product 01",
                "images": [
                    "https://cf.shopee.vn/file/a19634d433d2a69ac996dc4ed63fc7d3",
                    "https://cf.shopee.vn/file/191119aac15cdba45038004ab0766e62",
                    "https://cf.shopee.vn/file/03325676e397a94566d82ae699fcca1e",
                    "https://cf.shopee.vn/file/5947d1936e7f6aebd7cc3f03a0be4768"
                    ],
                "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 101
            },
            {
                "_id": "2",
                "title": "Wacth Product 02",
                "images": [
                    "https://cf.shopee.vn/file/ddb501d8a0c5f0d8c8d0c1fbcb678e5d",
                    "https://cf.shopee.vn/file/216a92ef71991a5ef4ce4e025806875f",
                    "https://cf.shopee.vn/file/8293dc25d5f98f29c7ecf7df30b2ffe1",
                    "https://cf.shopee.vn/file/3dac31b1ef5c85f1a395da06b78a2dae"
                    ],
                "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 102
            },
            {
                "_id": "3",
                "title": "Wacth Product 03",
                "images": [
                    "https://cf.shopee.vn/file/03325676e397a94566d82ae699fcca1e",
                    "https://cf.shopee.vn/file/5947d1936e7f6aebd7cc3f03a0be4768",
                    "https://cf.shopee.vn/file/a19634d433d2a69ac996dc4ed63fc7d3",
                    "https://cf.shopee.vn/file/191119aac15cdba45038004ab0766e62"              
                    ],
                "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 103
            },
            {
                "_id": "4",
                "title": "Wacth Product 04",
                "images": [
                    "https://cf.shopee.vn/file/191119aac15cdba45038004ab0766e62" ,
                    "https://cf.shopee.vn/file/03325676e397a94566d82ae699fcca1e",
                    "https://cf.shopee.vn/file/5947d1936e7f6aebd7cc3f03a0be4768",
                    "https://cf.shopee.vn/file/a19634d433d2a69ac996dc4ed63fc7d3",
                    
                    ],
                "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 104
            },
            {
                "_id": "5",
                "title": "Wacth Product 05",
                "images": [
                    "https://cf.shopee.vn/file/8293dc25d5f98f29c7ecf7df30b2ffe1",
                    "https://cf.shopee.vn/file/3dac31b1ef5c85f1a395da06b78a2dae",
                    "https://cf.shopee.vn/file/ddb501d8a0c5f0d8c8d0c1fbcb678e5d",
                    "https://cf.shopee.vn/file/216a92ef71991a5ef4ce4e025806875f",                   
                    ],
                "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 105
            },
            {
                "_id": "6",
                "title": "Wacth Product 06",
                "images": [
                    "https://cf.shopee.vn/file/216a92ef71991a5ef4ce4e025806875f", 
                    "https://cf.shopee.vn/file/8293dc25d5f98f29c7ecf7df30b2ffe1",
                    "https://cf.shopee.vn/file/3dac31b1ef5c85f1a395da06b78a2dae",
                    "https://cf.shopee.vn/file/ddb501d8a0c5f0d8c8d0c1fbcb678e5d",
                   
                    ],
                "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 106
            }
        ])
        return (
            <DataContext.Provider value={[products, setProducts]}>
                {props.children}
            </DataContext.Provider>
        )
    
}





