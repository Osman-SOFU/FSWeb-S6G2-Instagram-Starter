// 26. satırdaki beğeni sayısına bakın. Şu anda '100' olarak kodlanmış durumda.
// Doğru beğeni sayısını görüntülemek için proplardan gelen bir veri parçasını kullanın.
// Beğeni sayısını artırmak için "gonderiyiBegen" fonksiyonunu kullanan bir onClick işleyicisi de ekleyeceksiniz.
// (Ek görev olarak, kullanıcınızın aynı gönderiyi birden fazla kez "beğenmesini" engelleyin.)
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const BegenBolumu = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { gonderiyiBegen, begeniSayisi } = props;

  const [begendi, setBegendi] = useState(false);
  const [mevcutBegeniSayisi, setMevcutBegeniSayisi] = useState(begeniSayisi);

  const gonderiyiBegeni = () => {
    if (!begendi) {
      gonderiyiBegen();
      setMevcutBegeniSayisi(mevcutBegeniSayisi + 1);
      setBegendi(true);
      console.log(mevcutBegeniSayisi);
    } else {
      gonderiyiBegen();
      setMevcutBegeniSayisi(mevcutBegeniSayisi - 1);
      setBegendi(false);
    }
  };

  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} onClick={gonderiyiBegeni} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{mevcutBegeniSayisi} likes</p>
    </div>
  );
};

export default BegenBolumu;
