import { useState, useEffect } from "react"

const RefactorLifecycle = () =>{
    const [count, setCount] = useState(0)

    console.log('1. Constructor: Component được khởi tạo');

    useEffect(()=>{
        console.log('2. getDerivedStateFromProps: Nhận props và cập nhật state nếu cần');
    },[])

     console.log("3. Render: Render JSX ra màn hình");
     
    useEffect(()=>{
        console.log('4. componentDidMount: Component đã được render ra DOM');
    },[])

    const shouldComponentUpdate = (nextCount) =>{
        console.log('5. shouldComponentUpdate: Quyết định có cần render lại hay không',nextCount);
        return true
    }
    useEffect(()=>{
        if(shouldComponentUpdate(count)){
            console.log("6. componentDidUpdate: Component vừa được cập nhật", count);
        }
    },[count])

    useEffect(()=>{
        return () =>{
            console.log("7. componentWillUnmount: Component sắp bị gỡ bỏ khỏi DOM", count)
        }
    },[])
    
    return (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>{setCount(count + 1 )}}>Tăng Count</button>
      </div>
    )
}
export default RefactorLifecycle