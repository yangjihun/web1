
function getCheckboxValue()  {
    $('#num').fadeOut(20).fadeIn(200);
    var result = '';
    var score = 0;

    //          0학점 목록에서 가져오기
    const query0 = 'input[name="value0"]:checked';
    const selectedEls0 = 
        document.querySelectorAll(query0);
    // 과목명 출력
    // 선택된 목록에서 value 찾기
    selectedEls0.forEach((el0) => {
        result +=el0.value + '\n\n';
    });

    /*학점 출력*/
    selectedEls0.forEach((el0) => {
        score += 0;
    });


      //          1학점 목록에서 가져오기
      const query1 = 'input[name="value1"]:checked';
      const selectedEls1 = 
          document.querySelectorAll(query1);
      // 과목명 출력
      // 선택된 목록에서 value 찾기
      selectedEls1.forEach((el1) => {
          result +=el1.value + '\n\n';
      });
  
      /*학점 출력*/
      selectedEls1.forEach((el1) => {
          score += 0;
      });


    //          2학점 목록에서 가져오기
    const query2 = 'input[name="value2"]:checked';
    const selectedEls2 = 
        document.querySelectorAll(query2);
    // 과목명 출력
    // 선택된 목록에서 value 찾기
    selectedEls2.forEach((el2) => {
        result +=el2.value + '\n\n';
    });

    /*학점 출력*/
    selectedEls2.forEach((el2) => {
        score += 2;
    });
    

    //          3학점 목록 가져오기
    const query3 = 'input[name="2-2"]:checked';
    const selectedEls3 = 
        document.querySelectorAll(query3);
    
    /*과목명 출력*/
    // 선택된 목록에서 value 찾기
    selectedEls3.forEach((el3) => {
        result += el3.value + '\n\n';
    });
    
    /*학점 출력*/
    // 선택된 목록에서 value 찾기
    selectedEls3.forEach((el3) => {
        score += 3;
    });


    // 출력
    document.getElementById('result').innerText
    = result;
    // 출력
    document.getElementById('score').innerText
        = score;
    }


function alert_select_value(select_obj){
    var dobble = ['#software_choice','#statistics_choice']
    // selectbox에서 선택된 index를 찾고 
    var selected_index = select_obj.selectedIndex;
    // 선택된 index의 value를 찾고 
    var selected_value = select_obj.options[selected_index].value;
    // 원하는 동작을 수행한다.
    for(var i=0;i<dobble.length;i++){
        if(selected_value =='#all'){
            $(dobble[i]).fadeIn();
        }else if(dobble[i]!=selected_value){
            $(dobble[i]).fadeOut(10);
        }else{
            $(dobble[i]).fadeIn('slow');
        }
    }
}

for (var i=0;i<10000;i++){$(document).ready(function(){
    //스타일을 변경합니다
    $('.Y').fadeIn(1000).fadeOut(800);
    $('.a').fadeIn(750).fadeOut(1500);
    $('.n').fadeIn(500).fadeOut(950);
    $('.g').fadeIn(800).fadeOut(1250);
    $('.l').fadeIn(500).fadeOut(800);
    $('.e').fadeIn(1500).fadeOut(750);
});
}

