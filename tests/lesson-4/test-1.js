// 1. Khởi động Tàu Vũ trụ K16
const departurePlanet = "Trái Đất";
const mission = "Khám phá Vũ trụ K16";

const crew = ["Xuyen", "Son", "Yen Khoa", "Tuan Anh", "Trang Hoang", "Ngoc Tien", "Thu trang", "Thanh Dao", "Thanh Nha", "Shu Shu", "Viet Anh", "Pham Uyen", "Nhat Nguyen", "Thien Trang", "Nguyen Minh", "Ngoc Huyen", "Nga Quynh", "Minh Trang", "Mai Vo", "Luu Binh", "Long Nguyen", "Jimmy Tran", "Anh Tu", "Hoai Duy", "Hien Hien", "Helen Yoyo"];

function launchShip(newMember) {
  return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${newMember.join(", ")} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}

console.log(launchShip(crew));

// 2. Du hành đến hành tinh bí ẩn
const speed = 1000; 
const time = 24;
function calculateDistance(speed, time) {
  return speed * time; 
}
const khoangCach = calculateDistance(speed, time);
console.log(`Khoảng cách đến hành tinh bí ẩn là: ${khoangCach} km`);

// 3. Hành tinh kỳ lạ - chuyển thời gian sang hệ thập lục phân
function convertTimeToHex(time) {
  return time.toString(16);
}
const hexTime = convertTimeToHex(120);
console.log(`Thời gian ở hệ thập lục phân là: ${hexTime}`);

// 4. Khám phá kho báu
const code = "K16 Challenge";
function decryptCode(code) {
  let decrypted = "";
  for (let char of code) {
    if (char >= "a" && char <= "z") {
      decrypted += char.toUpperCase();
    } else if (char >= "A" && char <= "Z") {
      decrypted += char.toLowerCase();
    } else {
      decrypted += char;
    }
  }
  return decrypted;
}
const decrypted = decryptCode(code);
console.log(`Mật mã là: ${decrypted}`);

// 5. Trở về Trái Đất
function returnToEarth() {
  console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();
