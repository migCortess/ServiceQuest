interface Props {
  title: string;
  description: string;
  imgSrc?: string;
}


export const FeedBackPage = ({title, description}: Props) => {
  return (
    <div className="p-8 gap-4 max-h-[89vh] h-[89vh] md:min-h-[89vh] flex justify-center items-center w-full">
    <div className="backdrop-blur bg-[rgba(255,255,255,.6)] p-8 gap-4 max-h-[89vh] h-fit md:min-h-[89vh] shadow-md flex flex-col justify-center items-center w-full rounded">
      <h1 className="flex-1 border-b-1 text-center font-semibold text-xl pb-4 text-balance">
        {title}
      </h1>
      <img
        src="https://i1.sndcdn.com/artworks-8NX2OGTIVN6KpE9m-zFW3KA-t500x500.jpg"
        alt=""
        className="aspect-video overflow-hidden w-full sm:w-[80%] object-cover rounded"
      />
      <p>
       {description}
      </p>
      <button className="bg-[#7ac0cc] py-2 flex justify-center items-center gap-1 hover:border-transparent w-full sm:w-[80%] sm:hover:scale-105 transition-transform">
        {/* <AiOutlineSend /> */}
        Enviar
      </button>
    </div>
  </div>
  )
}
