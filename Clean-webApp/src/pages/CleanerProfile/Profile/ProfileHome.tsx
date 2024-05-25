import ProfileHomeHeader from "../../../components/CleanerProfile/ProfileHomeHeader/ProfileHomeHeader";

function ProfileHome() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="md:ml-3 lg:ml-5 md:w-7/12 flex flex-col">
        {/* Header */}
        <ProfileHomeHeader />
        {/* ^ Header */}
        <div className="space-y-3 md:mt-5 mt-3">
          <h1>Content</h1>
        </div>
        <div>
          <h1>Content</h1>
        </div>
      </div>
      {/* ^ Left Panel */}
      {/* Right Panel */}
      <div className="md:ml-2 lg:ml-3 bg-blue-50 rounded-xl p-5 md:w-5/12 w-full flex flex-col mt-3 sm:mt-0">
        {/* Header */}
        <div>
          <h1>Content</h1>
          <div className="bg-white w-full"></div>
        </div>
        {/* ^ Header */}
      </div>
      {/* ^ Right Panel */}
    </div>
  );
}

export default ProfileHome;
