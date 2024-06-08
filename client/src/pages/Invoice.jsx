import { useContext } from "react";
import { CarContext } from "../contexts/CarContext";
import PageHeader from "../components/common/PageHeader";

const Invoice = () => {
  //   const { customer, car, payment, rentalInfo, charges } = rentalDetails;
  const { rental } = useContext(CarContext);
  const { data } = rental;
  const {
    customer,
    car,
    pickupDate,
    dropoffDate,
    discounts,
    additionalCharges,
    totalAmount,
  } = data;

  console.log(car);

  const randomValue = generateRandomString();
  const rentalInfo = {
    reservationNumber: randomValue,
    repairOrder: randomValue,
    claim: randomValue,
    dateOut: pickupDate,
    dateIn: dropoffDate,
  };

  //   make a funtion for random number generate

  function generateRandomString() {
    const characters =
      "ABCDEFGHIJ091276837829290qrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  return (
    <>
    <PageHeader title={"Invoice"}/>
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded p-8 ">
          

          {/* RENTER INFO */}
          <div className="grid grid-cols-3">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">RENTER INFO</h3>
              <p>
                {customer.name} {customer.email}
              </p>
              <p>PH: {customer.phone}</p>
            </div>
            <section className="mb-4">
              <h3 className="text-xl font-semibold">BILL TO:</h3>
              <p>Name: {customer.name}</p>
              <p>Email: {customer.email}</p>
              <p>Phone: {customer.phone}</p>
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
              <p>Unit: {car.type}</p>
              <p>Make & Model: {car.model}</p>
              <p>discoun: {discounts}</p>
              <p>additionalCharges: {additionalCharges}</p>
            </section>

            {/* BILL TO */}

            <section className="mb-4">
              <h3 className="text-xl font-semibold">Reservation</h3>
              <p>RA #{rentalInfo.reservationNumber}</p>
              <p>REPAIR ORDER: {rentalInfo.repairOrder}</p>
              <p>CLAIM: {rentalInfo.claim}</p>
              <p>
                Date/Time Out: {new Date(rentalInfo.dateOut).toLocaleString()}
              </p>
              <p>
                Date/Time In: {new Date(rentalInfo.dateIn).toLocaleString()}
              </p>
            </section>
          </div>
          {/* UNIT DETAILS */}

          {/* RESERVATION INFO */}

          {/* CHARGE SUMMARY */}
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
                  <td>${totalAmount}</td>
                  <td>${totalAmount}</td>
                </tr>
                <tr>
                  <td>Discount</td>
                  {/* {/* <td>-${charges.discount}</td> */}
                  <td>-${discounts}</td>
                  <td>-${discounts}</td>
                </tr>
                <tr>
                  <td>Damages</td>
                  {/* <td>${charges.damages}</td>
                <td>${charges.damages}</td> */}
                </tr>
                <tr>
                  <td>Traffic tickets</td>
                  {/* <td>${charges.trafficTickets}</td>
                <td>${charges.trafficTickets}</td> */}
                </tr>
                <tr>
                  <td>Total Estimated Charges</td>
                  <td>${totalAmount}</td>
                  <td>${totalAmount}</td>
                </tr>
              </tbody>
            </table>
            {/* <p>Renter Payments: ${charges.renterPayments}</p> */}
          </section>

          {/* NOTICE */}
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

          {/* SIGNATURE */}
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
          onClick={() => window.print()}
        >
          Print Invoice
        </button>
      </div>
    </>
  );
};

export default Invoice;
