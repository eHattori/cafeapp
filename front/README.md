This project has the mission compare this big concurrence Frameworks for Javascript

For Run: 

cd docker/

#docker build
docker build -t nginx .

#Run React
sudo docker run -i -t -p 8080:8080 -v /path/cafeapp/front/react/helloword:/usr/share/nginx/html nginx

#Run angular
sudo docker run -i -t -p 8080:8080 -v /path/cafeapp/front/angular/helloword:/usr/share/nginx/html nginx