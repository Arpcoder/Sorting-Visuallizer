import React, { useState, useEffect } from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisuallizer.css';

const SortingVisuallizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < 200; i++) {
      newArray.push(randomIntFromInterval(10, 650));
    }
    setArray(newArray);
  };

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'blue' : 'yellow';

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 15);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 15);
      }
    }
  };

  return (
    <div>
      {array.map((value, idx) => (
        <div
          className='array-bar my-2'
          key={idx}
          style={{ height: `${value}px` }}
        ></div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          type='button'
          className='btn btn-outline-light '
          onClick={resetArray}
          style={{ margin: '0 2px' }}
        >
          Generate New Array
        </button>

        <button
          type='button'
          className='btn btn-outline-light '
          onClick={mergeSort}
          style={{ margin: '0 2px' }}
        >
          Perform Merge Sort
        </button>

        {/* <button onClick={() => this.quickSort()} style={{ margin: '0 2px' }}>Quick Sort */}
        {/* <button onClick={() => this.heapSort()} style={{ margin: '0 2px' }}>Heap Sort */}
        {/* <button onClick={() => this.bubbleSort()} style={{ margin: '0 2px' }}>Bubble Sort */}
      </div>
    </div>
  );
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayAreEqual(a1, a2) {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}

export default SortingVisuallizer;































// import React from 'react';

// import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
// import './SortingVisuallizer.css';
// //// import music from '../';
// ///// let j=10000;
// export default class SortingVisuallizer extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             array:[],
//         };
//     }

//     componentDidMount() {
//         this.resetArray();
//     }

//     resetArray() {
//         const array=[];
//         for(let i=0;i<220;i++)
//         array.push(randomIntFromInterval(10,650));
        

//     this.setState({array});
// }



// mergeSort() {
//     ///// const music=new Audio('../music.mp3');
//     ////// music.play();
//     const animations=getMergeSortAnimations(this.state.array);
    
//     for(let i=0;i<animations.length;i++)
//     {
//         const arrayBars=document.getElementsByClassName('array-bar');
//         const isColorChange = i%3!==2;

//         if(isColorChange)
//         {
//             const[barOneIdx,barTwoIdx]=animations[i];
//             const barOneStyle=arrayBars[barOneIdx].style;
//             const barTwoStyle=arrayBars[barTwoIdx].style;
//             const color = i % 3 === 0 ? 'blue' :'yellow';
//             setTimeout(() => {
//                 barOneStyle.backgroundColor=color;
//                 barTwoStyle.backgroundColor=color;
//             }, i*15);
//         }
//         else {
//             setTimeout(() => {
//                 const[barOneIdx,newHeight] = animations[i];
//                 const barOneStyle = arrayBars[barOneIdx].style;
//                 barOneStyle.height=`${newHeight}px`;
//             },i*15);
//         }
//     }

//     /////// setTimeout(() => {
//     //     music.pause();
//     ////////   }, animations.length * 15);
// }

// quickSort() {
    
// }

// bubbleSort() {
    
// }

// heapSort() {
    
// }

//     render() {
//         const {array}=this.state;
//         return(<div className='array-conatainer'>
//             {
//                 array.map((value,idx) =>(
//                     <div className="array-bar my-2" key={idx} style={{height:`${value}px`}}></div>
//                 ))
//             }

// <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center' }}>
//   <button type="button" className="btn btn-outline-light " onClick={() => this.resetArray()} style={{ margin: '0 2px' }}>Generate New Array</button>
//   <button type="button" className="btn btn-outline-light " onClick={() => this.mergeSort()} style={{ margin: '0 2px' }}>Perform Merge Sort</button>
//   {/*////// <button onClick={() => this.quickSort()} style={{ margin: '0 2px' }}>Quick Sort</button>
//   <button onClick={() => this.heapSort()} style={{ margin: '0 2px' }}>Heap Sort</button>
//   <button onClick={() => this.bubbleSort()} style={{ margin: '0 2px' }}>Bubble Sort</button> /////*/}
// </div>
//         </div>
//         );
//     }
// }

// function randomIntFromInterval(min,max)
// {
//     return Math.floor(Math.random() * (max-min+1)+min);
// }

// function arrayAreEqual(a1,a2)
// {
//     if(a1.length!==a2.length)
//     return false;

//     for(let i=0;i<a1.length;i++)
//     {
//         if(a1[i]!==a2[i])
//         return false;
//     }
//     return true;
// }


