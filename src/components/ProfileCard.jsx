function ProfileCard() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-xs">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Alex Johnson</h2>
      <p className="text-sm text-gray-500 mb-4">Full-stack developer based in Sydney.</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold border-none cursor-pointer hover:bg-blue-600 transition-colors duration-200">Contact Me</button>
    </div>
  )
}

export default ProfileCard
