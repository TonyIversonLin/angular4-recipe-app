import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer:boolean = false;
	serverCreationStatus = 'No Server was created';
	serverName = 'tony lin';
	serverCreated = false;
	servers = ['Test Server 1', 'Test Server 2'];

	constructor() { 
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000)
	}

	ngOnInit() {
    }

    onCreateServer() {
    	this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    	this.serverCreated = true;
    	this.servers.push(this.serverName);
    }

    onUpdateServerName(event: any) {
    	console.log(event);
    	this.serverName = event.target.value;
    }
}
