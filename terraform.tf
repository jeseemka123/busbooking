resource "aws_instance" "example" {
  ami           = "ami-0e742cca61fb65051"
  instance_type = "t2.micro"

}

resource "null_resource" "example" {
  depends_on = [aws_instance.example]

  provisioner "local-exec" {
    command = "sleep 180 && aws ec2 terminate-instances --instance-ids ${aws_instance.example.id}"
  }
}
