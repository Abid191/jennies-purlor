export const getServices = async()=>{
    const res = await fetch('http://localhost:3000/services/api/get-all')
    const resp =await res.json()
    return resp
}

export const All_users = async()=>{
    const res = await fetch('http://localhost:3000/Signup/api')
    const resp =await res.json()
    console.log(resp)
    return resp
}

export const getService = async(id)=>{
    const res = await fetch(`http://localhost:3000/services/api/${id}`)
    const resp =await res.json()
    return resp
}

export const getBooking =async({email})=>{
    const res = await fetch(`http://localhost:3000/components/Dashboard/UserDashboard/bookingList/api/${email}`)
    const resp = await res.json() 
    console.log(resp.myBookings)
    return resp
}

export const users = async (id)=>{
    const data = await fetch(`http://localhost:3000/Signup/api/update/${id}`)
    const res = await data.json()
    console.log(res.resp)
    return res    
}