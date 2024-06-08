// import proptypes 
import PropTypes from 'prop-types';

const CustomerDetails = ({ customer, setCustomer }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <label className="block text-white mb-2">Name</label>
        <input
          type="text"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          className="w-full p-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-white mb-2">Email</label>
        <input
          type="email"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          className="w-full p-2 rounded"
          required
        />
      </div>
      <div className="col-span-2">
        <label className="block text-white mb-2">Phone</label>
        <input
          type="text"
          value={customer.phone}
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
          className="w-full p-2 rounded"
          required
        />
      </div>
    </div>
  );
};

CustomerDetails.propTypes = {
  customer: PropTypes.object.isRequired,
  setCustomer: PropTypes.func.isRequired,
};

export default CustomerDetails;
