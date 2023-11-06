let traffic; //"traffic"이라는 이름의 변수를 선언하라는 명령
let infiniteOffset = 80; //infiniteOffset이라는 변수를 선언하고, 그 값을 80으로 초기화

function setup() {
  //스케치를 초기화하고, 시작할 때 필요한 설정을 수행
  setCanvasContainer('canvas', 3, 2, true); // 캔버스 생성, 캔버스 가로 크기, 캔버스 세로 크기, 창의 크기에 따라 캔버스 크기를 자동으로 조정할지에 대한 여부 설정
  colorMode(HSL, 360, 100, 100, 100); //컬러모드를 설정. 각 구성 요소의 최대값을 타나내는데 색상:360, 채도:100, 명도:100의 매개변수를 받음
  background('white'); //배경색을 'white'로 설정.
  traffic = new Traffic(); //Traffic라는 클래스의 인스턴스를 생성하고, 그것을 traffic라는 변수에 할당하는 코드
  for (let n = 0; n < 10; n++) {
    //반복 작업을 수행할 때 사용하는 for 구문으로 'n' 변수를 0으로 초기화하고, 'n < 10;' 부분은 n이 10보다 작은 동안에 루프가 실행. 'n++' 부분은 반복이 끝날 때마다 'n'을 1씩 증가.
    traffic.addVehicle(random(width), random(height)); //처음 위치를 랜덤으로 지정하는 코드.
  }
}

function draw() {
  //화면에 그림을 그리고 상호작용을 하는 코드
  background('white'); //캔버스의 배경색을 흰색으로 설정
  traffic.run(); //traffic이라는 클래스를 실행
}

function mouseDragged() {
  //마우스를 드래그할 때 호출되는 함수
  traffic.addVehicle(mouseX, mouseY); //traffic이라는 클래스의 addvehicle이라는 메서드에게 마우스 커서의 x,y 좌표로 지정하여 호출
}
