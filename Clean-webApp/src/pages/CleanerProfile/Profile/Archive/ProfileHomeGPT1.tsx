// function ProfileHome() {
//   return (
//     <div className="min-h-full w-full flex">
//       {/* Left Panel */}
//       <div className="ml-5 rounded-xl bg-yellow-50 w-7/12 flex flex-col">
//         {/* Header */}
//         <div>
//           <div className="bg-blue-600 w-full border-b-2"></div>
//           <h1>heeey</h1>
//           <div className="bg-white w-full"></div>
//         </div>
//         {/* ^ Header */}
//       </div>
//       {/* ^ Left Panel */}
//       {/* Right Panel */}
//       <div className="ml-5 rounded-xl bg-yellow-50 w-5/12 flex-col">
//         {/* Header */}
//         <div>
//           <div className="bg-blue-600 w-full border-b-2"></div>
//           <h1>heeey</h1>
//           <div className="bg-white w-full"></div>
//         </div>
//         {/* ^ Header */}
//       </div>
//       {/* ^ Right Panel */}
//     </div>
//   );
// }

// export default ProfileHome;

// function ProfileHome() {
//   return (
//     <div className="min-h-screen w-full flex">
//       {/* Left Panel */}
//       <div className="md:ml-5 rounded-xl bg-yellow-50 w-7/12 flex flex-col">
//         {/* Header */}
//         <div className="relative h-1/3">
//           <div className="bg-white border h-1/2 w-full rounded-t-xl"></div>
//           {/* Header Profile Pic and Titles */}
//           <div className="flex absolute top-16 m-5">
//             <div className="bg-pink-600 h-24 w-24 rounded-full">
//               <h1 className="text-center">img</h1>
//             </div>
//             <div className="flex flex-col ml-3 justify-center">
//               <h1 className="h-12 bg-yellow-50">name</h1>
//               <h1 className="h-12 bg-orange-50">location</h1>
//             </div>
//           </div>
//           {/* ^ Header Profile Pic and Titles */}
//           <div className="bg-white w-full h-1/2 border pt-12 px-3"></div>
//         </div>
//         {/* ^ Header */}
//         <div className="flex-grow bg-white w-full p-4"></div>
//       </div>
//       {/* ^ Left Panel */}
//       {/* Right Panel */}
//       <div className="ml-5 rounded-xl bg-yellow-50 w-5/12 flex flex-col">
//         {/* Header */}
//         <div>
//           <div className="bg-blue-600 w-full border-b-2"></div>
//           <h1>heeey</h1>
//           <div className="bg-white w-full"></div>
//         </div>
//         {/* ^ Header */}
//       </div>
//       {/* ^ Right Panel */}
//     </div>
//   );
// }

// export default ProfileHome;
function ProfileHome() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="md:ml-5 rounded-xl bg-yellow-50 md:w-7/12 w-full flex flex-col">
        {/* Header */}
        <div className="relative flex flex-col items-center">
          <div className="bg-blue-600 w-full h-32 md:h-48"></div>
          <div className="bg-white w-full h-16 md:h-24"></div>
          <div className="absolute -bottom-12 flex flex-col items-center">
            <div className="bg-pink-600 h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white">
              <h1 className="text-center">img</h1>
            </div>
            <div className="flex flex-col items-center mt-3">
              <h1 className="text-lg md:text-xl font-bold bg-yellow-50 px-4 py-2 rounded-lg">
                Name
              </h1>
              <h1 className="text-md md:text-lg font-semibold bg-orange-50 px-4 py-2 rounded-lg">
                Location
              </h1>
            </div>
          </div>
        </div>
        {/* ^ Header */}
        <div className="flex-grow bg-white w-full p-4 mt-16 md:mt-24"></div>
      </div>
      {/* ^ Left Panel */}
      {/* Right Panel */}
      <div className="md:ml-5 rounded-xl bg-yellow-50 md:w-5/12 w-full flex flex-col">
        {/* Header */}
        <div>
          <div className="bg-blue-600 w-full border-b-2"></div>
          <h1>heeey</h1>
          <div className="bg-white w-full"></div>
        </div>
        {/* ^ Header */}
      </div>
      {/* ^ Right Panel */}
    </div>
  );
}

export default ProfileHome;
