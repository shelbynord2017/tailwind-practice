function FeatureCard({ title, description, level }) {
    const levelColors =  {
        Beginner: 'bg-blue-100 text-blue-700',
        Intermediate: 'bg-amber-100 text-amber-700',
        Advanced: 'bg-green-100 text-green-700'
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <span className={`text-sm font-semibold px-2 py-1 rounded ${levelColors[level]}`}>{`Skill level: ${level}`}</span>
        </div>
    )
}

export default FeatureCard