## 작은 블록체인을 만들며, typescript를 간단히 익혀보자!

모든 typescript는 모두 javascript로 변환되어 컴파일된다.  
왜 쓰냐 javascript가 엄격한 규칙이 없이 유연하기 때문에 의도치 안게 버그를 발생시킨다.  
따라서 더욱 예측가능하고 가독성이 증가될 수 있다.  


node는 typscript를 모르기 때문에 start이전 tsc로 컴파일을 해준다음에 node를 실행한다.
{
    ...
    "start": "node index.js",
    "prestart": "tsc"
    ...
}

TS는 기존의 JS와 달리 변수, 파라미터, 프로퍼티에 타입을 입력을 해주어야한다.

