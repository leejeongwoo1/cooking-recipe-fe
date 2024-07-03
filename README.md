# 🍴 레시피와 쇼핑이 더해진 What’s in your fridge

![image](https://github.com/zzgh06/cooking-recipe-be/assets/127922435/b549bfe3-30e2-4195-9399-683b292fbfee)
What’s in your fridge 는 사용자가 다양한 레시피를 확인하고, 필요한 식재료를 간편하게 구매할 수 있는 웹사이트입니다.

> <br>

## 프로젝트 소개

**What’s in your fridge**는 요리를 할 때 여러 사이트를 돌아다니며 레시피를 찾고 식재료를 따로 구매하는 번거로움을 없애기 위해 기획하게 되었습니다.

- 사용자가 요리 레시피를 쉽게 검색하고, 해당 레시피에 필요한 식재료를 바로 구매할 수 있도록 돕고,
- My 냉장고 기능을 통해 사용자가 가지고 있는 식재료를 이용하여 만든 레시피를 추천해줍니다.
- 다양한 유저들을 마음에 드는 레시피나 상품에 평점을 주고 댓글을 작성할 수 있습니다.
  <br>

## ⭐ 주요 기능

### 1. 레시피 관리

- 다양한 레시피 검색 및 작성
- 레시피 상세 정보 보기

### 2. 식재료 관리

- 필요한 식재료 장바구니 추가
- 식재료 구매

### 3. 냉장고 관리

- 냉장고 식재료 관리
- 냉장고 내 식재료 레시피 추천

### 4. 리뷰 및 사용자 관리

- 레시피, 식재료 리뷰 작성

### 5. 챗봇

- 문의 기능
  <br>

## 사용 방법

1. 홈페이지에서 원하는 레시피를 검색합니다.
2. 레시피를 클릭하여 상세 정보를 확인합니다.
3. 필요한 식재료를 장바구니에 추가합니다.
4. My 냉장고에서 가지고 있는 등록한 후 추천 레시피를 확인합니다.
5. 장바구니 페이지로 이동하여 식재료를 구매합니다.
6. 마이 페이지에서 주문현황을 확인할 수 있습니다.
   <br>

## 📚 STACKS

### Environment

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Config

<img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white">

### Development

<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"> <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

### deployment

<img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"> <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7">
<br>
<br>

## 채택한 개발 기술과 브랜치 전략

**React**

- 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
- 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.

**Redux Toolkit**

- Redux Toolkit을 사용하여 상태 관리를 더욱 간편하게 구현했습니다.
- Redux Toolkit은 기존 Redux보다 설정이 간단하고, 보일러플레이트 코드가 적어 학습 비용을 줄일 수 있었습니다.
- createSlice와 createAsyncThunk 등을 사용하여 상태와 비동기 로직을 효율적으로 관리했습니다.

**브랜치 전략**

- Git-flow 전략을 기반으로 master, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- master, develop, Feat 브랜치로 나누어 개발을 하였습니다.
- master 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
- develop 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
- Feat 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

## ERD

![ERD](./readme_images/erd.png)

## API

- ![API Auth](./readme_images/api_auth.png)
- ![API User](./readme_images/api_user.png)
- ![API Fridge](./readme_images/api_frige.png)
- ![API Ingredient](./readme_images/api_ingredient.png)
- ![API Recipe](./readme_images/api_recipe.png)
- ![API Cart](./readme_images/api_cart.png)
- ![API Review Recipe](./readme_images/api_review_recipe.png)
- ![API Review Ingredient](./readme_images/api_reivew_ingredient.png)
- ![API Order](./readme_images/api_order.png)

## 화면 구성

|          레시피 페이지          |       레시피 상세 페이지        |
| :-----------------------------: | :-----------------------------: |
| ![image](./readme_images/1.png) | ![image](./readme_images/2.png) |

|          스토어 페이지          |       스토어 상세 페이지        |
| :-----------------------------: | :-----------------------------: |
| ![image](./readme_images/3.png) | ![image](./readme_images/4.png) |

|        My 냉장고 페이지         |          admin 페이지           |
| :-----------------------------: | :-----------------------------: |
| ![image](./readme_images/5.png) | ![image](./readme_images/6.png) |

<br>

## 시작 가이드

1. 리포지토리 클론

   ```sh
   git clone https://github.com/leejeongwoo1/cooking-recipe-fe.git
   git clone https://github.com/leejeongwoo1/cooking-recipe-be.git

   ```

2. 패키지 설치
   ```sh
   npm install
   ```
3. 백엔드 환경변수 설정
   ```
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```
4. 프론트엔드 환경변수 설정
   ```
   REACT_APP_LOCAL_BACKEND=http://localhost:5000/api
   REACT_APP_PROD_BACKEND=
   REACT_APP_BACKEND_PROXY=
   REACT_APP_CLOUDINARY_CLOUD_NAME=
   REACT_APP_CLOUDINARY_PRESET=
   REACT_APP_GOOGLE_CLIENT_ID=
   REACT_APP_GOOGLE_SECRET_KEY=
   ```
5. 로컬 서버 시작
   ```sh
   백엔드: npm run local_start
   프론트엔드: npm start
   ```
   <br>

### 팀원 구성

|                            이정우                             |                      정성욱                      |                최충현                |                 오혜림                 |
| :-----------------------------------------------------------: | :----------------------------------------------: | :----------------------------------: | :------------------------------------: |
| [@leejeongwoo1](https://github.com/leejeongwoo1/leejeongwoo1) | [@SungJung0616](https://github.com/SungJung0616) | [@zzgh06](https://github.com/zzgh06) | [@ohloara](https://github.com/ohloara) |

<br>

### 개발 기간

- 전체 개발 기간: 2024-06-16 ~ 2024-06-30
- 백앤드 구현: 2022-06-18 ~ 2022-06-27
- 프론트앤드 및 기능 구현: 2022-06-18 ~ 2022-06-30
