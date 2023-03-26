import React from "react";

const Info = ({ info }) => {
  return (
    <div>
      <div>
        <p>Şehir: {info.name}</p>
      </div>

      <p>Şuanki Sıcaklık: {info.main?.temp}C°</p>

      <p>Minimum Sıcaklık: {info.main?.temp_min}C°</p>

      <p>Maximum Sıcaklık: {info.main?.temp_max}C°</p>

      <p>Hava Durumu: {info.weather ? info.weather[0].description : null}</p>

      <p>Hissedilen Sıcaklık: {info.main?.feels_like}C°</p>

      <p>Rüzgar Hızı: {info.wind?.speed} Knot</p>
    </div>
  );
};

export default Info;
