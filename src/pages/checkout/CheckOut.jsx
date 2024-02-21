import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const { title, price, _id, img } = service;
    const {user} = useContext(AuthContext);

    const handleBookService = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service_id: _id,
            service: title,
            price: price, 
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
        })
    }


    return (
        <div>
            <h2>bookings {title} </h2>
            <form onSubmit={handleBookService} className="card-body">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="form-control">
                    <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="email" name="email" defaultValue={user?.email}  placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="date" name="date" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="text" name="dueAmount" defaultValue={price} placeholder="due amount" className="input input-bordered" required />
                </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="order confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;