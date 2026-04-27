import { useImmer } from "use-immer";

export default function UserProfileWithImmer() {
  const [userProfile, updateUserProfile] = useImmer({
    name: "",
    email: "",
    contactDetails: {
      phone: "",
      address: "",
    },
    preferences: {
      newsletter: false,
      notifications: false,
    },
  });

  // Update name
  const updateName = (e) => {
    updateUserProfile((draft) => {
      draft.name = e.target.value;
    });
  };

  // Update phone
  const updatePhone = (e) => {
    updateUserProfile((draft) => {
      draft.contactDetails.phone = e.target.value;
    });
  };

  // Update address
  const updateAddress = (e) => {
    updateUserProfile((draft) => {
      draft.contactDetails.address = e.target.value;
    });
  };

  // Toggle newsletter
  const toggleNewsletter = () => {
    updateUserProfile((draft) => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile (Immer)</h2>

      <div>
        <input
          type="text"
          placeholder="Name"
          value={userProfile.name}
          onChange={updateName}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Phone"
          value={userProfile.contactDetails.phone}
          onChange={updatePhone}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Address"
          value={userProfile.contactDetails.address}
          onChange={updateAddress}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={userProfile.preferences.newsletter}
            onChange={toggleNewsletter}
          />
          Subscribe to Newsletter
        </label>
      </div>

      <h3>Current Profile:</h3>
      <pre
        style={{
          background: "#111",
          color: "#00ffcc",
          padding: "15px",
          borderRadius: "8px",
          fontSize: "14px",
          textAlign: "left",
          overflowX: "auto",
        }}
      >
        {JSON.stringify(userProfile, null, 2)}
      </pre>
    </div>
  );
}
