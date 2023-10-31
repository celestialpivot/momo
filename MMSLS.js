/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=29875517&pid=f88883857f0ece7cb78af56b0f495143&tid=5688891deaaefe1341cf30f65d02e70d",
    "https://www.maimemo.com/share/page?uid=32146536&pid=f88883857f0ece7cb78af56b0f495143&tid=e85d7cb5cf564555b16f0cec86cba832",
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
