

function Card({title="ayan",description}:{title?:string,description:string}) {
  return (
    <div className="card">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="text-sm text-gray-500">{description}</h2>
    </div>
  )
}

export default Card