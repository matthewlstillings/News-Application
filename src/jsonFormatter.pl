#!/usr/bin/perl

use AIS::Standard_CGI;
use AIS::Security;
use AIS::PMS::Display;
use JSON::Create;

my $p = $AIS::Standard_CGI::p;
#my $s = new AIS::Security({ arg => 0, site_id => 441 });
my $dbh = AIS::DB::connect();

print "Content-Type: application/json\n\n";
get_data();

sub get_data
{
	$input = { GROUP_ID => 4050 };
	my $output = AIS::FG::FileGroup::search_documents($input);
	print JSON::Create::create_json($output);
}
