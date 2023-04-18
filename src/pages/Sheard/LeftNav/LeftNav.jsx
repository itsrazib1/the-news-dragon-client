// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const LeftNav = () => {
//     const [categories,Setcategories] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:5000/categories')
//         .then(res => res.json())
//         .then(data => Setcategories(data))
//         .catch(error => console.error(error))
//     },[])
//     return (
//         <div>
//            <h4>National News</h4>
//            {
//             categories.map(category => 
//             <p className='text-start ps-5' key={category.id}>
// <Link>{category.name}</Link>
//             </p> )
//            }
//         </div>
//     );
// };

// export default LeftNav;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;