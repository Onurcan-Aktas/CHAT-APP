import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn:"15d",
    })

    res.cookie("jwt",token,{//Çerezin adı "jwt" olsun, değeri de ürettiğimiz o şifreli kod olsun.
        maxAge:15*24*60*60*1000,//Çerez tarayıcıda ne kadar dursun? (Matematik işlemi: 15 günün milisaniye karşılığı).
        httpOnly:true,//"Bu çereze sadece sunucu (backend) erişebilir" demektir.
        sameSite:"strict",//Bu da CSRF denilen başka bir saldırıyı engeller. "Bu çerez sadece benim sitemde çalışsın, başka siteden link 
                         // verilirse çalışmasın" demektir.
        secure:process.env.NODE_ENV !=="development"//"Bu çerez sadece güvenli bağlantıda (HTTPS) çalışsın."Geliştirme yaparken (localhost) 
                                                    // HTTPS olmadığı için development modunda false (kapalı), canlıya aldığında true (açık) olur.
    })
}

export default generateTokenAndSetCookie;