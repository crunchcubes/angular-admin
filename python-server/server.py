#!/usr/bin/python
from http.server import BaseHTTPRequestHandler,HTTPServer
from os import curdir, sep
import os
import pathlib

PORT_NUMBER = 8080
HOST_NAME = '0.0.0.0'

#This class will handles any incoming request from
#the browser 
class HTTPHandler(BaseHTTPRequestHandler):
	def do_OPTIONS(self):
		self.send_response(200, "ok")
		self.send_header('Access-Control-Allow-Origin', '*')
		self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
		self.send_header("Access-Control-Allow-Headers", "X-Requested-With")
		self.send_header("Access-Control-Allow-Headers", "Content-Type")
		self.end_headers()
	def handle_http(self, status_code, path):
		self.send_response(status_code)
		self.send_header('Content-type', 'text/html')
		self.end_headers()
		content = '''
		<html><head><title>Python Server</title></head>
		<body><p>The requested file could not be found</p>
		<p>Path: {}</p>
		</body></html>
		'''.format(path)
		return bytes(content, 'UTF-8')
	#Handler for the GET requests
	def do_GET(self):
		if self.path=="/":
			self.path="/index.html"
		try:
			#Check the file extension required and
			#set the right mime type
			mimetype = ''
			ext = pathlib.Path(self.path).suffix
			types = {
				'.html': 'text/html',
				'.jpg': 'image/jpg',
				'.png': 'image/png',
				'.js': 'application/javascript',
				'.css': 'text/css',
				'.json': 'application/json',
				'': 'application/json'
			}

			if ext in types:
				mimetype = types[ext]
				print(mimetype);

				#Open the static file requested and send it
				f = open(curdir + sep + self.path, 'rb') 
				#self.send_response(200)
				self.send_response(200, "ok")
				self.send_header('Access-Control-Allow-Origin', '*')
				self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
				self.send_header("Access-Control-Allow-Headers", "X-Requested-With")
				self.send_header("Access-Control-Allow-Headers", "Content-Type")
				# self.end_headers()
				self.send_header('Content-type',mimetype)
				self.end_headers()
				self.wfile.write(f.read())
				f.close()
			else:
				#return bytes('Regregu', 'UTF-8')
				response = self.handle_http(400, self.path)
				self.wfile.write(response)
			return		
		except IOError:
			self.send_error(404,'File Not Found: %s' % self.path)
try:
	#Create a web server and define the handler to manage the
	#incoming request
	server = HTTPServer((HOST_NAME, PORT_NUMBER), HTTPHandler)
	print ('Started httpserver on port ' , PORT_NUMBER)
	
	#Wait forever for incoming htto requests
	server.serve_forever()

except KeyboardInterrupt:
	print ('^C received, shutting down the web server')
	server.socket.close()