
export default function Profile() {
  return (
    <div className="flex gap-36">
      <div>
        <h3 className="text-[#4338CA]">Profile</h3>
        <ul className="p-0 flex flex-col gap-2">
          <li>Ad Soyad: Burak Demirhan</li>
          <li>İkamet Şehri: Ankara</li>
          <li>Egitim Durumu: Üniveriste Mezunu</li>
          <li>Tercih Ettigi Rol: Harika Developer</li>
        </ul>
      </div>
      <div>
        <h2 className="text-[#4338CA]">About Me</h2>
        <p className="text-lg text-[#6B7280]	">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
          Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
        </p>
        <span></span>
        <p className="text-lg text-[#6B7280]">
          Mnima accusamus ratione soluta aperiam sit voluptate? <br /> Dicta
          quod deserunt quam temporibus cumque magnam!{" "}
        </p>
       
      </div>
    </div>
  );
}
