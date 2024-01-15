/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=29875517&pid=f16a312204f74d4886bc508e08af3963&tid=36e4e2868cd1955bad8aa3633267c4cd",
    "https://www.maimemo.com/share/page?uid=29875517&pid=b02459eebd97b718c833ba0a963c89c1&tid=c935cc00c552fb337cd91f9bac04140c"
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
