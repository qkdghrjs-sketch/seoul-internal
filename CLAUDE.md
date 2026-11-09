# 서울내과의원 홈페이지 (seoul-internal)

인사말 기준 「서울특별시 구로구 가마산로」 서울내과의원. 정적 HTML 여러 장(빌드 없음).
⚠️ 고양 토당동 서울내과(`서울내과_일산_홈페이지`, seoulim-clinic) · 주엽동 일산서울내과(`일산서울내과_홈페이지`)와 **다른 병원**입니다.

## 주소 · 배포
- 사이트: https://seoul-internal.vercel.app (Vercel 프로젝트 `seoul-internal`)
- GitHub: qkdghrjs-sketch/seoul-internal (자동 배포 연결 없음)
- 배포: 이 폴더에서 `vercel deploy --prod --yes` → 커밋 · push
- 되돌리기: Vercel → Deployments → 이전 배포 → Promote
- `.vercelignore`: `자료\`, 안내 파일은 사이트에 올리지 않음

## 연락 창구
- 카톡방 「서울내과 대웅 홈페이지 작업」(병원 쪽 담당: 안영 부장님 — 호칭은 「부장님」, 「원장님」 아님). 카톡 원본 글·사진은 `자료\카톡_날짜\`(깃 제외).
- 카톡 받기: 스크래치 스크립트 방식(카톡브리핑 `tools\kakao_win.py`·`사진저장.py` 재사용, 메시지 발송 없음).

## 폴더 지도
- `index.html` 첫 화면 — 스타일이 **파일 안 `<style>`에 따로** 있음
- 세부 페이지 35장(`about/ guide/ checkup/ endoscopy/ clinic/ ultrasound/ service/`) — 공용 `css/style.css`
- 상단 메뉴는 **모든 html 파일에 각각 복사**되어 있음. 메뉴를 바꾸면 36장 전부 고친다.
- 상단 모양을 바꿀 때는 `index.html` `<style>` 과 `css/style.css` **두 곳**을 같이 고친다.

## 지켜야 할 원칙
- 의료광고법: 최상급 표현, 치료효과 보장, 환자 체험담 금지
- 원장 성함 · 약력 · 진료시간은 병원이 준 정보만
- PC 상단(2026-11-09 요청): 로고 왼쪽 + 메뉴 같은 줄, 메뉴 글씨 크게(1400px 이상 19px). 다시 가운데 두 줄로 돌리지 않는다.
