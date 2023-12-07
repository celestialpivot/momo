/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=29875517&pid=6ce0c9ca99bf67fc61870161afc84422&tid=c56ab2ed803cd3be087ad2c972b1e024",
    "https://www.maimemo.com/share/page?uid=29875517&pid=a46d2f64adda04fdb90aca6207d15636&tid=13ca0df4e7dd42c9d79a2c596073ac12",
    "https://www.maimemo.com/share/page?uid=2292904&pid=ca61e29648691a4736dab4b5837e55a4&tid=2e8b075ef39c9c8e714090c0cd222c15"
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
