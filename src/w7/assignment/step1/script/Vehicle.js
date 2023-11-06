class Vehicle {
  //Vehicle 이라는 클래스를 정의
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    //생성된 개채의 속성, 특성에 대한 초기값을 설정 (x,y좌표, 물체의 질량, 반경, 속도, 힘, 색상)
    this.pos = createVector(x, y); //좌표에서의 개체의 위치를 설정
    this.vel = p5.Vector.random2D(); //개체의 속도를 나타냅니다. random2D는 무작위 속도를 부여
    this.acc = createVector(); //개체의 가속도를 설정
    this.mass = mass; //개체의 질량을 설정
    this.rad = rad; //개체의 반경을 설정
    this.speedMx = speedMx; //개체의 최대 속도를 설정
    this.forceMx = forceMx; //개체의 최대 힘을 설정 (끌어당기는 힘)
    this.neighborhooodRad = 50; //개체의 반지름을 설정
    this.color = color; //개체의 색상을 설정
  }

  cohesion(others) {
    let cnt = 0; //반경 내에 있는 개체의 수를 위해 cnt 변수 초기화
    const steer = createVector(0, 0); //좌표가 (0,0)으로 초기화된 벡터 steer 제작
    others.forEach((each) => {
      //other배열을 통해 반복 시작
      if (each !== this) {
        //개채와 주변 개채가 동일한지 확인
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2; //현재 개체의 위치와 주변 개체의 위치 사이의 거리 제곱을 계산 (주변 개체의 좌표에서 현재 개체의 좌표를 빼고 각 차이를 제곱한 뒤 차이의 제곱을 합산)
        if (distSq < this.neighborhooodRad ** 2) {
          //거리 제곱이 주변 반경 제곱보다 작은지 확인
          steer.add(each.pos); //거리 제곱이 주변 반경 제곱보다 작을 시 개체의 위치를 steer 벡터에 추가
          cnt++; //cnt(count) 변수 증가
        }
      }
    });
    if (cnt > 0) {
      //cnt변수가 0보다 클 경우를 확인 (주변에 개체가 있는지 확인)
      steer.div(cnt); //steer벡터를 cnt(개수)로 나누어 주변 개체의 위치 계산
      steer.sub(this.pos); //steer벡터에서 개체의 위치 뺌 (개체의 방향을 주변 개체의 질량의 중심과 일치시킴)
      steer.setMag(this.speedMx); //steer벡터의 크기를 개체의 최대 속도로 설정 (끌어당기는 힘이 최대 속도를 넘지 않도록 설정)
      steer.sub(this.vel); //steer벡터에서 개체의 현제 속도를 뺌
      steer.limit(this.forceMx); //steer벡터의 크기를 끌어당기는 최대 힘으로 제한
    }
    return steer; //steer 벡터 반환
  }

  align(others) {
    let cnt = 0; //주변 개체의 수를 나타내는 변수 초기화
    const steer = createVector(0, 0); //좌표가 (0,0)인 steer벡터 생성
    others.forEach((each) => {
      //인접한 개체를 통해 반복 시작 (각각의 개체에 대해 each 다음을 수행)
      if (each !== this) {
        //개채와 주변 개채가 동일한지 확인
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2; //현재 개체의 위치와 주변 개체의 위치 사이의 거리 제곱을 계산
        if (distSq < this.neighborhooodRad ** 2) {
          //distSq(거리의 제곱)이 주변 반경 제곱보다 작은지 확인
          steer.add(each.vel); //차량의 속도를 steer벡터에 추가
          cnt++; //cnt(count) 변수 증가
        }
      }
    });
    if (cnt > 0) {
      //cnt변수가 0보다 클 경우를 확인 (주변에 개체가 있는지 확인)
      steer.div(cnt); //steer벡터를 cnt(개수)로 나누어 주변 개체의 위치 계산
      steer.setMag(this.speedMx); //steer벡터의 크기를 개체의 최대 속도로 설정 (끌어당기는 힘이 최대 속도를 넘지 않도록 설정)
      steer.sub(this.vel); //steer벡터에서 개체의 현제 속도를 뺌
      steer.limit(this.forceMx); //steer벡터의 크기를 끌어당기는 최대 힘으로 제한
    }
    return steer; //steer 벡터 반환
  }

  separate(others) {
    //일종의 동작을 수행하는 'separate'라는 함수 정의
    let cnt = 0; //'cnt'라는 변수를 으로 초기화
    const steer = createVector(0, 0); //'steer'라는 변수를 선언하고 (0,0)을 가리키는 백터로 초기화
    others.forEach((each) => {
      //'others' 배열에 있는 각 요소에 대해 반복
      if (each !== this) {
        //'each'가 'this'와 같지 않을 경우에 아래 코드 실행
        const dist = this.pos.dist(each.pos); //'this'와 'each' 사이의 거리를 계산
        if (dist > 0 && this.rad + each.rad > dist) {
          // 두 객체 사이의 거리가  0보다 크고, 반지름의 합보다 작을 때 아래 코드 실행
          const distNormal = dist / (this.rad + each.rad); //거리를 반지름 합으로 나눠서 정규화
          const towardMeVec = p5.Vector.sub(this.pos, each.pos); //'this.pos'에서 'each.pos'를  빼서 현재 객체에서 'each'로 향하는 백터를 생성
          towardMeVec.setMag(1 / distNormal); //벡터 길이를 '1 / distNomal'로 설정
          steer.add(towardMeVec); //'steer'에 'towardMeVec'을 더함.
          cnt++; // cnt라는 변수의 값을 1씩 증가
        }
      }
    });
    if (cnt > 0) {
      // cnt가 0보다 큰 경우를 확인 후. 이 조건이 충족될 때 아래의 조향(steering) 벡터를 계산하고 제한하는 작업을 실핼
      steer.div(cnt);
      //   cnt 값으로 steer 벡터를 나누어 조건에 해당하는 요소들의 평균을 구합니다.
      steer.setMag(this.speedMx);
      //   steer 벡터의 크기를 this.speedMx로 설정하여, 객체의 최대 속도를 제한
      steer.sub(this.vel);
      //   현재 속도(this.vel)를 steer에서 뺀다. 이것은 현재의 속도와 기존의 조향 힘 간의 차이를 계산
      steer.limit(this.forceMx);
      //   계산된 steer 벡터를 this.forceMx로 제한하여, 힘의 최대값을 제한
    }
    return steer;
    // 계산된 steer 벡터를 반환한다.
  }

  applyForce(force) {
    // applyForce의 함수
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    // force를 this.mass로 나누어 준 값인 forceDivedByMass를 계산합니다. this.mass는 객체의 질량(mass)이며, 힘을 질량으로 나누어 가속도(acceleration)를 계산
    this.acc.add(forceDivedByMass);
    // forceDivedByMass 값을 가속도(acceleration)에 더한다. acc는 객체의 가속도를 나타낸다. 이것은 객체가 받는 모든 힘을 누적하여 저장하는데 사용되어, 객체의 가속도는 객체에 작용하는 힘들을 고려하여 계산
  }

  update() {
    this.vel.add(this.acc);
    // 객체의 속도(vel)에 현재의 가속도(acc)를 더한다.
    this.vel.limit(this.speedMx);
    // 속도를 speedMx로 제한
    this.pos.add(this.vel);
    // 객체의 위치(pos)에 현재 속도(vel)를 더하여 새로운 위치에 업데이트
    this.acc.mult(0);
    // 가속도(acc)를 0으로 초기화하여, 이전에 누적된 모든 외부 힘을 제거
  }

  borderInfinite() {
    // borderInfinite 함수
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset;
      //   만약 객체의 x 좌표(pos.x)가 음수 값인 -infiniteOffset보다 작으면(화면 왼쪽 경계를 넘어가면),
      // 객체의 x 좌표를 화면의 오른쪽 끝으로 이동
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset;
      //   그렇지 않고, 만약 객체의 x 좌표가 width와 infiniteOffset을 더한 값보다 크다면(화면 오른쪽 경계를 넘어가면),
      // 객체의 x 좌표를 화면의 왼쪽 끝으로 이동
    }
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
      //   만약 객체의 y 좌표(pos.y)가 음수 값인 -infiniteOffset보다 작으면(화면 위쪽 경계를 넘어가면),
      // 객체의 y 좌표를 화면의 아래쪽 끝으로 이동시킵니다.
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
      //   그렇지 않고, 만약 객체의 y 좌표가 height와 infiniteOffset을 더한 값보다 크다면(화면 아래쪽 경계를 넘어가면),
      // 객체의 y 좌표를 화면의 위쪽 끝으로 이동시킵니다.
    }
  }
  display() {
    //상태나 정보를 화면에 그리기 위한 메서드
    push(); //그래픽 상태를 저장하는 함수로 현재 그래픽을 스택에 저장
    translate(this.pos.x, this.pos.y); //현재 좌표계를 'this.pos.x', 'this.pos.y'의 값으로 이동.
    rotate(this.vel.heading()); //현재 속도 백터의 각도를 반환하여 현재 백터의 방향을 따라 회전을 적용.
    noStroke(); //테투리를 없애 선을 그리지 않도록 설정
    fill(this.color); //채우는 색을 'this.color'로 설정
    beginShape(); // 다각형을 그릴 때 사용하는 함수 시작
    vertex(this.rad, 0); //(this.rad, 0)위치에 꼭짓점 추가
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135))); //다른 꼭짓점 추가.
    vertex(0, 0); //(0,0) 위치에 꼭짓점 추가.
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE); //다각형을 마지막에 닫을 때 사용하는 함수로 도형 완성
    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop(); //'push'함수로 저장한 그래픽을 꺼내서 현재 상태로 되돌리는 역할
  }
}
