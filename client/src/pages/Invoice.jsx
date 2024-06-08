import { useContext ,useRef} from "react";
import { CarContext } from "../contexts/CarContext";
import PageHeader from "../components/common/PageHeader";
import {Link} from "react-router-dom"
const Invoice = () => {
  //   const { rental.customer, car, payment, rentalInfo, charges } = rentalDetails;
  const { rental } = useContext(CarContext);
  const { data } = rental;
  const {
    rental:rentaldata,
    totalEstimatePrice,
    discountAmount,
    additionalCost,
    totalPrice,
    message,
    rentalDuration,
  } = data;

  console.log("from:",data);
const printRef = useRef();

const handlePrint = () => {
  const originalContents = document.body.innerHTML;
  const printContents = printRef.current.innerHTML;

  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;

  // window.location.reload()e; // Reload to reset the page
};

  return (
    <>
      <PageHeader title={"Invoice"} />
      <div className="container mx-auto p-4">
        <div>
          <button
            className="mt-4  text-blue-600 px-4 py-2 rounded"
            onClick={handlePrint}
          >
            Print Invoice
          </button>
          <Link
          to="/"
            className="mt-4 text-blue-600 px-4 py-3 rounded"
      
          >
            Home
          </Link>
        </div>
        <div className="bg-white shadow-md rounded p-8 " ref={printRef}>
          {/* RENTER INFO */}
          <div className="grid grid-cols-3">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">RENTER INFO</h3>
              <p>
                {rentaldata.customer.name} {rentaldata.customer.email}
              </p>
              <p>PH: {rentaldata.customer.phone}</p>
            </div>
            <section className="mb-4">
              <h3 className="text-xl font-semibold">BILL TO:</h3>
              <p>Name: {rentaldata.customer.name}</p>
              <p>Email: {rentaldata.customer.email}</p>
              <p>Phone: {rentaldata.customer.phone}</p>
            </section>
          </div>

          <div className="grid grid-cols-3 my-4 py-4">
            {/* CAR RENTAL COMPANY INFO */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Car Rental Company</h3>
              <p>CH Car Place Inc</p>
              <p>162 Bergen st Brooklyn, NY 11213 PH#</p>
              <p>Monday-Sunday 9:00 AM-6:00 PM</p>
            </div>
            <section className="mb-4">
              <h3 className="text-xl font-semibold">UNIT DETAILS</h3>
              <p>Unit: {rentaldata.car.type}</p>
              <p>Make & Model: {rentaldata.car.model}</p>
              <p>Rental Duration:{rentalDuration}</p>
            </section>

            {/* BILL TO */}

            <section className="mb-4">
              <h3 className="text-xl font-semibold">Reservation</h3>
              <p>RA #{rentaldata.reservation.recipt}</p>
              <p>REPAIR ORDER: {rentaldata.reservation.recipt}</p>
              <p>CLAIM: {rentaldata.reservation.claim}</p>
              <p>
                Date/Time Out:{" "}
                {new Date(
                  rentaldata.reservation.reservationDate
                ).toLocaleString()}
              </p>
              <p>QTY: {rentaldata.reservation.reservationNumber}</p>
            </section>
          </div>
          <section className="mb-4">
            <h3 className="text-xl font-semibold">CHARGE SUMMARY</h3>
            <table className="w-full mb-4">
              <thead>
                <tr>
                  <th className="text-left">Description</th>
                  <th className="text-left">Unit Price</th>
                  <th className="text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hourly</td>
                  {/* <td>${charges.hourlyRate}</td>
                <td>${charges.hourlyRate}</td> */}
                </tr>
                <tr>
                  <td>NYS State Tax</td>
                  {/* <td>{charges.taxRate}%</td>
                <td>${charges.taxAmount}</td> */}
                </tr>
                <tr>
                  <td>Total Estimated Charges</td>
                  {/* <td>${totalAmount}</td> */}
                  <td>${totalEstimatePrice}</td>
                  <td>${totalEstimatePrice}</td>
                </tr>
                <tr>
                  <td>Discount</td>
                  {/* {/* <td>-${charges.discount}</td> */}
                  <td>-${discountAmount}</td>
                  <td>-${discountAmount}</td>
                </tr>

                <tr>
                  <td>Additonal cost</td>
                  <td>${additionalCost}</td>
                  <td>${additionalCost}</td>
                </tr>
                <tr>
                  <td>Total Estimated Charges</td>
                  <td>${totalPrice}</td>
                  <td>${totalPrice}</td>
                </tr>
              </tbody>
            </table>
            <p>{message}</p>
          </section>
          <section className="mb-4">
            <h3 className="text-xl font-semibold">NOTICE</h3>
            <p>Collision Insurance (CDW)- $7 per day</p>
            <p>
              Your rental agreement offers, for an additional charge, an
              optional waiver to cover all or a part of your responsibility for
              damage to or loss of the vehicle. Before deciding whether to
              purchase the waiver, you may wish to determine whether your own
              automobile insurance or credit card agreement provides you
              coverage for rental vehicle damage or loss and determine the
              amount of the deductible under your own insurance coverage. The
              purchase of the waiver is not mandatory. The waiver is not
              Insurance. I acknowledge that I have received and read a copy of
              this.
            </p>
            <div>
              <input type="checkbox" id="accept" name="accept" />
              <label htmlFor="accept"> Accept</label>
            </div>
            <div>
              <input type="checkbox" id="reject" name="reject" />
              <label htmlFor="reject"> Reject</label>
            </div>
          </section>
          <section className="mb-4">
            <h3 className="text-xl font-semibold">Signature</h3>
            <p>Renters Signature: ____________________________</p>
            <p>- Rates do not include gasoline.</p>
            <p>
              - Reserves the right to collect deposit covering estimated rental
              charges.
            </p>
          </section>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handlePrint}
        >
          Print Invoice
        </button>
      </div>
    </>
  );
};

export default Invoice;
