export const AlreadyAnswered = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[80vh] gap-9">
        <div className="card flex mt-2 p-3 border-2 border-skin-primary/40 bg-white">
          <span className="font-semibold text-3xl text-center">
            Veo que tenemos un tramposito por aqui
          </span>
          <img
            src="https://i.pinimg.com/564x/65/51/c3/6551c3e07c7820ef8ac4e7777d1c590d.jpg"
            alt=""
          />
        </div>
        <span className="card bg-white/40 p-4 border-2 border-skin-primary/50 text-wrap flex justify-center text-center text-5xl text-red-500 font-bold">
          Tu mama se avergonzaría de ti 😔
        </span>
      </div>
    </>
  );
};
