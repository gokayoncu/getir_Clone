import React from 'react'
import './../../css/footer.css'
import { TbWorld } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-box'>
                <h2>Getir'i indir!</h2>
                <a href="https://apps.apple.com/us/app/getir-groceries-in-minutes/id995280265" target='_blank'><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" /></a>
                <a href="https://play.google.com/store/apps/details?id=com.getir&pli=1" target='_blank'><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" /></a>
                <a href="https://appgallery.huawei.com/#/Featured" target='_blank'><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" /></a>
            </div>
            <div className='footer-box'>
                <h2>Getir'i keşfet</h2> 
                <a href="#">Hakkımızda</a>
                <a href="#">Kariyer</a>
                <a href="#">Teknoloji Kariyerleri</a>
                <a href="#">İletişim</a>
                <a href="#">Sosyal Sorumluluk Projeleri</a>
                <a href="#">Basın Bültenleri</a>           
            </div>
            <div className='footer-box'>
                <h2>Yardıma mı ihtiyacın var?</h2>
                <a href="#">Sıkça Sorulan Sorular</a>
                <a href="#">Kişisel Verilerin Korunması</a>
                <a href="#">Gizlilik Politikası</a>
                <a href="#">Kullanım Koşulları</a>
                <a href="#">Çerez Politikası</a>
                <a href="#">İşlem Rehberi</a>            
            </div>
            <div className='footer-box'>
                <h2>İş Ortağımız Ol</h2>
                <a href="#">Bayimiz Olun</a>
                <a href="#">Deponu Kirala</a>
                <a href="#">GetirYemek Restoranı Ol</a>
                <a href="#">GetirÇarşı İşletmesi Ol</a>
                <a href="#">Zincir Restoranlar</a> 
            </div>
            
            <a href="https://etbis.eticaret.gov.tr/sitedogrulama/A8C52359B2F14075B6829557FC4306B1"><img className='qrcode' src="https://cdn.getir.com/getirweb-images/common/etbis.png" alt="" /></a>      
        </div>  
        <hr />
        <div className='footer-end'>
            <div>
                <p>© 2024 Getir</p>
                <a href='#'>Bilgi Toplumu Hizmetleri</a> 
            </div>
            <div className='socials'>
                <a href="#"><FaFacebook style={{width:20,height:20}} /></a>
                <a href="#"><FaXTwitter style={{width:20,height:20}}/></a>
                <a href="#"><FaInstagram style={{width:20,height:20}}/></a>
                <div>
                    <a href="#"><TbWorld style={{width:20,height:20}}/></a>
                    <span> Türkçe(TR)</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
