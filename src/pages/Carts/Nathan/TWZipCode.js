import { useState } from 'react';
import { countries, postcodes, townships } from './data/townships';
import './TWZipCode.scss';

function TWZipCode(props) {
  const { countryName, setCountryName, townshipName, setTownshipName } = props;
  // 代表目前被選中的縣市的索引值
  // 注意資料類型都是數字(索引值是數字)
  // -1代表目前沒有選中任何的陣列中的值
  const [countryIndex, setCountryIndex] = useState(-1);
  const [townshipIndex, setTownshipIndex] = useState(-1);
  // const [countryName, setCountryName] = useState('');
  // const [townshipName, setTownshipName] = useState('');
  return (
    <div className="w-100 d-flex justify-content-between adress-input-wrap mb-4">
      <div className="w-40">
        <select
          className=" w-100 bg-transparent text-gray border-0 border-bottom focus-none"
          value={countryIndex}
          onChange={(e) => {
            // 注意e.target.value為字串類型(由網頁上傳入都是字串值)
            // 為了保持countryIndex(state狀態)的資料類型都一致相同，所以要轉為數字
            setCountryIndex(Number(e.target.value));
            setCountryName(countries[e.target.value]);
            // setCountryName(Object.keys(countries))
            // 重置townshipIndex的值為-1
            setTownshipIndex(-1);
          }}
        >
          <option value="-1" disabled>
            請選擇縣市
          </option>
          {countries.map((v, i) => {
            return (
              <option key={i} value={i}>
                {v}
              </option>
            );
          })}
        </select>
      </div>
      <div className="w-40">
        <select
          className=" w-100 bg-transparent text-gray border-0 border-bottom focus-none"
          value={townshipIndex}
          onChange={(e) => {
            // 注意e.target.value為字串類型(由網頁上傳入都是字串值)
            // 為了保持setTownshipIndex(state狀態)的資料類型都一致相同，所以要轉為數字
            setTownshipIndex(Number(e.target.value));
            setTownshipName(townships[countryIndex][e.target.value]);
          }}
        >
          <option value="-1">請選擇區域</option>
          {/* 當有選擇縣市(countryIndex >)時才要作map，呈現其它的區域選項 */}
          {countryIndex > -1 &&
            townships[countryIndex].map((v, i) => {
              return (
                <option key={i} value={i}>
                  {v}
                </option>
              );
            })}
        </select>
      </div>
      <div className="w-10 border-bottom text-center">
        <span className="w-100 h-100 text-gray postcode-text">
          {countryIndex > -1 && townshipIndex > -1
            ? postcodes[countryIndex][townshipIndex]
            : ''}
        </span>
        {/* <input
          className={'w-100 h-100 bg-transparent text-gray'}
          type="text"
          placeholder="郵遞區號 : "
          value={
            countryIndex > -1 && townshipIndex > -1
              ? postcodes[countryIndex][townshipIndex]
              : ''
          }
        /> */}
      </div>
    </div>
  );
}

export default TWZipCode;
