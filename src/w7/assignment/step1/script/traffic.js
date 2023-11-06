class Traffic {
  // Traffic에 대한 속성 정리 및 생성
  constructor() {
    // 프로그래밍에서 클래스 내부에 있는 특별한 종류의 메서드 또는 함수
    this.vehicles = [];
    // Traffic 내부에서 Vehicles를 참조할 때 사용
  }

  run() {
    // 동작을 수행하는지에 대한 코드
    this.vehicles.forEach((eachVehicle) => {
      // this.vehicles 배열의 각 요소에 대해 반복하며, (eachVehicle)에 대해 아래의 동작을 수행
      const separate = eachVehicle.separate(this.vehicles);
      //   eachVehicle의 separate() 메서드를 호출하여, 주변 거리를 계산하고 해당 개체와 다른 개체로부터 따로 움직이도록 하는 벡터를 반환
      separate.mult(1);
      //   separate 벡터를 1로 스케일링하여 크기를 조절
      eachVehicle.applyForce(separate);
      //   eachVehicle에게 separate 벡터를 적용하여, 해당 벡터에 방향성 힘(위치를 조정하는 힘)을 적용
      const align = eachVehicle.align(this.vehicles);
      //   eachVehicle의 align() 메서드를 호출하여, 주변 개체의 평균 방향을 계산하여 벡터를 반환
      align.mult(0.5);
      //   align 벡터를 0.5로 스케일링하여 크기를 조절
      eachVehicle.applyForce(align);
      //   eachVehicle에게 align 벡터를 적용하여, 해당 개체의 방향성 (방향을 맞추는 힘)을 적용
      const cohesion = eachVehicle.cohesion(this.vehicles);
      //   eachVehicle의 cohesion() 메서드를 호출하여, 주변 개체과의 평균 위치를 계산하는 벡터를 반환
      cohesion.mult(0.5);
      //   벡터를 0.5로 스케일링하여 크기를 조절
      eachVehicle.applyForce(cohesion);
      //   eachVehicle에게 cohesion 벡터를 적용하여, 해당 개체의 방향성 (그룹 내에서의 위치 조정을 위한 힘)을 적용
      eachVehicle.update();
      //    eachVehicle의 상태를 업데이트하여 시뮬레이션에서의 다음단계로 이동
      eachVehicle.borderInfinite();
      //   eachVehicle가 경계를 벗어나지 않도록 설정
      eachVehicle.display();
      //   eachVehicle를 시각적으로 표현
    });
  }

  addVehicle(x, y) {
    // addVehicle는 x와 y값을 가지게 된다
    // const mass = floor(random(1, 3));
    const mass = 1;
    // mass라는 변수를 1로 초기화
    this.vehicles.push(
      // this.vehicles 배열에 새로운 요소를 추가하기 위해 push() 메서드를 사용
      new Vehicle(x, y, mass, mass * 12, 5, 0.5, color(random(360), 100, 40))
      //   새로운 Vehicle 객체를 생성하고, 다음과 같은 매개변수로 초기화
      // x,y는 개체의 초기 좌표 설정, mass는 1인 질량, mass*12는 최대 질량 값, 최대속도는 5, 끓어당기는 힘은 0.5
      //   색상(Hue)을 무작위로 생성하며, 최대 채도와 고정된 밝기 및 어두운 정도로 설정
    );
  }
}
