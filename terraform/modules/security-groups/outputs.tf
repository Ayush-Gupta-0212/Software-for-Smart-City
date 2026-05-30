output "app_sg_id" {
  description = "ID of the smart-city app security group."
  value       = aws_security_group.app.id
}
